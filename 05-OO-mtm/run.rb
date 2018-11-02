require 'pry'

class User
  attr_accessor :username
  @@all = []

  def initialize(username)
    @username = username
    @@all << self
  end

  def own_tweets
    Tweet.all.select {|t| t.user.username == self.username}
  end

  def self.all
    @@all
  end

  def likes
    Like.all.select do |like|
      like.user == self
    end
  end

  def tweets_liked
    likes.map do |like|
      like.tweet
    end
  end

  def post_tweet(message)
    Tweet.new(message, self)
  end

  def delete_own_tweet(message)
    tweet = Tweet.find(message)
    if tweet
      if tweet.user == self
        Tweet.delete(tweet)
      else
        puts ' YOU CANNOT DELETE WHAT IS NOT YOUUUUUUUURS !!!'
      end
    else
      puts 'No tweet found'
    end
  end
end

class Tweet
  attr_accessor :message, :user
  @@all = []

  def initialize(message, user)
    @message = message
    @user = user
    @@all << self
  end

  def self.all
    @@all
  end

  def likes
    Like.all.select do |like|
      like.tweet == self
    end
  end

  def likers
    likes.map {|l| l.user}.uniq
  end

  def how_many_likes
    likes.length
  end

  def self.delete(tweet)
    @@all.delete(tweet)
  end

  def self.find(message)
    @@all.find {|t| t.message == message}
  end

end

class Like

  attr_accessor :user, :tweet

  @@all = []

  def initialize(user, tweet)
    @user = user
    @tweet = tweet
    @@all << self
  end

  def self.all
    @@all
  end

end

dan = User.new("_daniel_tweets")
mayowa = User.new("_mayowa_tweets")
lucy = User.new("mooucy")

t1 = Tweet.new("it is raining today", dan)
t2 = Tweet.new("i came in early today", mayowa)
t3 = Tweet.new("im happy he did that", dan)
t4 = Tweet.new("i like biscuits", lucy)
t5 = Tweet.new("i can spell", dan)
t6 = Tweet.new("3r657tfgiuyhjkb", lucy)

Like.new(dan, t1)
Like.new(dan, t1)
Like.new(dan, t3)
Like.new(dan, t5)
Like.new(mayowa, t1)
Like.new(mayowa, t4)
Like.new(lucy, t1)
Like.new(lucy, t4)
Like.new(lucy, t2)
Like.new(lucy, t6)

Pry.start
