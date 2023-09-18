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

import logging

DEV_AUTH_ENABLED = False
DEV_AUTH_PASSWORD = 'another secret'

# Directory to search for mock fixtures, if running in "test" or "demo" mode.
FIXTURES_PATH = None

# Minutes of inactivity before session cookie is destroyed
INACTIVE_SESSION_LIFETIME = 120

# These "INDEX_HTML" defaults are good in hartsfield-[dev|qa|prod]. See development.py for local configs.
INDEX_HTML = 'dist/static/index.html'

# Logging
LOGGING_FORMAT = '[%(asctime)s] - %(levelname)s: %(message)s [in %(pathname)s:%(lineno)d]'
LOGGING_LOCATION = 'hartsfield.log'
LOGGING_LEVEL = logging.DEBUG
LOGGING_PROPAGATION_LEVEL = logging.WARN

REMEMBER_COOKIE_NAME = 'remember_hartsfield_token'

# Used to encrypt session cookie.
SECRET_KEY = 'secret'

TIMEZONE = 'America/Los_Angeles'

# This base-URL config should only be non-None in the "local" env where the Vue front-end runs on port 8080.
VUE_LOCALHOST_BASE_URL = None

# We keep these out of alphabetical sort above for readability's sake.
HOST = '0.0.0.0'
PORT = 5000
