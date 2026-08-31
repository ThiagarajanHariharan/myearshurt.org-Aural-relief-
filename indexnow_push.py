#!/usr/bin/env python3
import json
import urllib.request
import urllib.error

HOST = "myearshurt.me"
KEY = "8f3b207a9e1d4c6b8a2e5f0d3c7b1a9e"
KEY_LOCATION = f"https://{HOST}/{KEY}.txt"

URL_LIST = [
    f"https://{HOST}/",
    f"https://{HOST}/my-ear-hurts",
    f"https://{HOST}/waiting-for-ent-appointment",
    f"https://{HOST}/sounds-for-ear-discomfort",
    f"https://{HOST}/what-is-sound-masking",
    f"https://{HOST}/ear-pain-at-night",
    f"https://{HOST}/clogged-ears-sound-relief",
    f"https://{HOST}/hyperacusis-acoustic-shield"
]

payload = {
    "host": HOST,
    "key": KEY,
    "keyLocation": KEY_LOCATION,
    "urlList": URL_LIST
}

endpoints = [
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow"
]

print(f"🚀 Pinging IndexNow endpoints for {len(URL_LIST)} URLs on {HOST}...")
for endpoint in endpoints:
    try:
        data = json.dumps(payload).encode('utf-8')
        req = urllib.request.Request(endpoint, data=data, headers={'Content-Type': 'application/json; charset=utf-8'}, method='POST')
        with urllib.request.urlopen(req, timeout=10) as response:
            print(f"  ✅ [{response.status}] Successfully submitted to: {endpoint}")
    except urllib.error.HTTPError as e:
        print(f"  ⚠️ HTTP {e.code} for {endpoint}: {e.read().decode('utf-8')}")
    except Exception as e:
        print(f"  ❌ Error submitting to {endpoint}: {e}")

print("✨ IndexNow submission complete!")
