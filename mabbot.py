from random import choice, randrange

def random_consonant():
    return choice(list('bcdfghjklmnprstvwxyz'))

def random_vowel():
    return choice(list('aeiou'))

def random_syllable():
    return random_consonant() + random_vowel()

if __name__ == '__main__':
    bio = ""
    for x in range(0, randrange(2,5)):
        bio += random_syllable()
    bio += choice([random_consonant()+'umab','zumab','ximab',random_consonant()+'omab'])
    print(bio)