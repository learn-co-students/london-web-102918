class Person

  attr_accessor :name, :age

  @@all = []

  def initialize(name, age)
    # @n instance variable
    @name = name
    @age = age
    @@all << self
  end

  def self.all
    @@all
  end

  def greet
    puts "Hi, my name is #{@name}"
  end

  def self.description
    puts "This class deals with people"
  end

end
