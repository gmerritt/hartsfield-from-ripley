"""
Copyright ©2022. The Regents of the University of California (Regents). All Rights Reserved.

Permission to use, copy, modify, and distribute this software and its documentation
for educational, research, and not-for-profit purposes, without fee and without a
signed licensing agreement, is hereby granted, provided that the above copyright
notice, this paragraph and the following two paragraphs appear in all copies,
modifications, and distributions.

Contact The Office of Technology Licensing, UC Berkeley, 2150 Shattuck Avenue,
Suite 510, Berkeley, CA 94720-1620, (510) 643-7201, otl@berkeley.edu,
http://ipira.berkeley.edu/industry-info for commercial licensing opportunities.

IN NO EVENT SHALL REGENTS BE LIABLE TO ANY PARTY FOR DIRECT, INDIRECT, SPECIAL,
INCIDENTAL, OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, ARISING OUT OF
THE USE OF THIS SOFTWARE AND ITS DOCUMENTATION, EVEN IF REGENTS HAS BEEN ADVISED
OF THE POSSIBILITY OF SUCH DAMAGE.

REGENTS SPECIFICALLY DISCLAIMS ANY WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE
SOFTWARE AND ACCOMPANYING DOCUMENTATION, IF ANY, PROVIDED HEREUNDER IS PROVIDED
"AS IS". REGENTS HAS NO OBLIGATION TO PROVIDE MAINTENANCE, SUPPORT, UPDATES,
ENHANCEMENTS, OR MODIFICATIONS.
"""
from collections import OrderedDict
import json

from flask import current_app as app
from hartsfield import __version__ as version
from hartsfield.lib.http import tolerant_jsonify
from hartsfield.lib.util import get_eb_environment

PUBLIC_CONFIGS = [
    'DEV_AUTH_ENABLED',
    'HARTSFIELD_ENV',
    'TIMEZONE',
]


@app.route('/api/config')
def app_config():
    def _to_api_key(key):
        chunks = key.split('_')
        return f"{chunks[0].lower()}{''.join(chunk.title() for chunk in chunks[1:])}"

    api_json = {
        **dict((_to_api_key(key), app.config[key]) for key in PUBLIC_CONFIGS),
        **{
            'ebEnvironment': get_eb_environment(),
        },
    }
    return tolerant_jsonify(OrderedDict(sorted(api_json.items())))


@app.route('/api/version')
def app_version():
    build_stats = load_json('config/build-summary.json')
    v = {'version': version}
    v.update(build_stats or {'build': None})
    return tolerant_jsonify(v)


def load_json(relative_path):
    try:
        file = open(app.config['BASE_DIR'] + '/' + relative_path)
        return json.load(file)
    except (FileNotFoundError, KeyError, TypeError):
        return None
