import json

file = open('data.json', 'r')
data = json.load(file)

movies = ["the_lego_movie", "matrix", "star_wars", "empire_strikes_back", "the_iron_giant", "tron"]
frames = ["1","2","3","4","5","6","7","8","9"]


for j in range (0,6):
    print movies[j]+':'
    print "{"
    for i in range (0,9):
        frame = data[movies[0]][frames[i]]
        for k in range (len(frame)):
            frame[k] = str(frame[k])
        frame.sort()
        key = i+1
        print '"'+str(key)+'": '+str(frame)+','
    print "},"
print "------"