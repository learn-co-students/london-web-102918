class Gym
  attr_reader :name

  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end

  def memberships
    Membership.all.select {|m| m.gym == self}
  end

  def lifters
    memberships.map {|m| m.lifter}
      .uniq
  end

  def lifter_names
    lifters.map {|l| l.name }
  end

  def combined_lift_total
    # lifters.inject(0){|sum, l| sum + l.lift_total }
    
    total_lift = 0
    lifts_array = lifters.map {|lifter| lifter.lift_total}
    lifts_array.each {|lift| total_lift += lift}
    total_lift
  end
end
