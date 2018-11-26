# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Doctor.destroy_all

Doctor.create(name: 'dr Wachira', specialty: 'the cookie guy')
Doctor.create(name: 'dr Catchmarchoeck', specialty: 'Vet')
Doctor.create(name: 'dr Rico', specialty: 'ummmmmmologist')
Doctor.create(name: 'dr Lucy', specialty: 'DAGS')
Doctor.create(name: 'dr Oliver', specialty: 'Students')
