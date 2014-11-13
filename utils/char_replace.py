f1 = open('new_data.json', 'r')
f2 = open('new_data.json.tmp', 'w')
for line in f1:
    f2.write(line.replace('\'', '"'))
f1.close()
f2.close()