import json
import requests
from random import choice, randrange

def random_consonant():
    return choice(list('bcdfghjklmnprstvwxyz'))

def random_vowel():
    return choice(list('aeiou'))

def random_syllable():
    return random_consonant() + random_vowel()

if __name__ == '__main__':
    antibody = ""
    for x in range(0, randrange(2,5)):
        antibody += random_syllable()
    antibody += choice([random_consonant() + 'umab', 'zumab', 'ximab', random_consonant() + 'omab'])
    payload = {"text": "_Antibody of the day:_ *" + antibody + "*", "username": 'mabbot'}
    r = requests.post('https://hooks.slack.com/services/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',
                      data=json.dumps(payload),
                      headers={'Content-Type': 'application/json'})
