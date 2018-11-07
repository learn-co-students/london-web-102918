
class Lifter
  @@all = []

  attr_reader :name, :lift_total

  def initialize(name, lift_total)
    @name = name
    @lift_total = lift_total
    @@all << self
  end

  def memberships
    Membership.all.select {|m| m.lifter == self}
  end

  def gyms
    memberships.map {|m| m.gym}
      .uniq
  end

  def self.avg_lift
    lifts_array = Lifter.all.map{|l| l.lift_total}
    sum_of_lifts = 0

    lifts_array.each do |l|
      sum_of_lifts += l
      # sum_of_lifts = sum_of_lifts + l
    end

    sum_of_lifts.to_f/lifts_array.length
  end

  def total_cost
    total = 0
    memberships.map {|m| m.cost}
      .each {|c| total += c}
    total
  end

  def sign_up(cost, gym)
    Membership.new(cost, self, gym)
  end

  def self.all
    @@all
  end

end
