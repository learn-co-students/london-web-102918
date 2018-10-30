require 'rest-client'
require 'json'
require 'pry'

def welcome
  "Welcome to my book app"
end

def get_search_term
  puts "what kind of books would you like to see?"
  gets.chomp
end

def make_search(search_term)
  response = RestClient.get "https://www.googleapis.com/books/v1/volumes?q=#{search_term}"
  JSON.parse(response.body)
end

def parse_books(results)
  results["items"].map do |item|
    item["volumeInfo"]
  end
end

def print_book(book_hash)
  puts '---------------------------------------------------'
  puts "Title: #{book_hash["title"]}"
  puts "Authors: #{authors_string(book_hash["authors"])}"
  puts "Description: #{description_string(book_hash["description"])}"
  puts '---------------------------------------------------'
end

def authors_string(authors)
  if authors
    authors.join(", ")
  else
    "no authors mentioned"
  end
end

def description_string(description)
  if description
    description[0..60] + '...'
  else
    "no description available"
  end
end

def run
  puts welcome
  search_term = get_search_term
  search_results = make_search(search_term)
  book_hashes = parse_books(search_results)

  book_hashes.each do |book_hash|
    print_book(book_hash)
  end
end

run
