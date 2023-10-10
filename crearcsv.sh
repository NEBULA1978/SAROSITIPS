#!/bin/bash

# Define an array of names and an array of email domains
names=("John Doe" "Jane Smith" "Bob Johnson" "Alice Williams" "David Brown" "Emily Davis" "Michael Wilson" "Sarah Lee" "Robert Miller" "Linda Anderson" "William Moore" "Karen Jackson" "Richard White" "Susan Harris" "James Martin" "Patricia Lewis" "Charles Clark" "Maria Hall" "Thomas Young" "Nancy Turner" "Daniel Baker" "Lisa Harris" "Paul King" "Karen Scott" "Kevin Adams" "Linda Wright" "Mark Mitchell" "Anna Walker" "James Johnson" "Sarah Robinson" "Joseph Wright" "Betty Martinez" "David Davis" "Dorothy Taylor" "George Garcia" "Nancy Wilson" "Larry Hernandez" "Margaret Martinez" "Donald Lewis" "Jennifer Lopez" "Steven Smith" "Donna Davis" "Edward Taylor" "Elizabeth Brown" "Brian Adams" "Helen Lee" "James Wilson" "Laura Hall" "Thomas Martin" "Deborah Davis" "Joseph Clark" "Ruth Wilson" "Daniel Lee" "Dorothy Taylor" "Frank Wright" "Nancy Turner" "George King" "Linda Davis" "Henry Young" "Betty Turner" "William Lee" "Sarah Anderson" "Jeffrey Lee" "Cynthia Adams" "Edward Wilson" "Carol Clark" "Anthony Lewis" "Mary Hernandez" "Kevin Turner" "Donna Lewis" "Scott Johnson" "Margaret Jackson" "Paul Garcia" "Sharon Turner" "Daniel Young" "Susan Wright" "Jeffrey Brown" "Lisa Young" "Thomas Clark" "Laura Davis" "Kenneth Adams" "Susan Hernandez" "Timothy White" "Karen Turner" "Gary Jackson" "Cynthia Garcia" "Christopher Harris" "Donna Turner" "Frank White" "Elizabeth Wright" "Gary Martin")
domains=("example.com" "gmail.com" "yahoo.com" "hotmail.com")

# Randomly select names and email domains to create entries
for i in {1..100}; do
  name_index=$((RANDOM % ${#names[@]}))
  domain_index=$((RANDOM % ${#domains[@]}))
  name="${names[$name_index]}"
  domain="${domains[$domain_index]}"
  email="${name,,}@${domain}"
  echo "$name,$email" >> users.csv
done

echo "CSV file 'users.csv' with 100 entries has been created."
