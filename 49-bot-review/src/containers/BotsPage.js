import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'
import BotSpecs from '../components/BotSpecs'



class BotsPage extends React.Component {
  //start here with your code for step one
    state = {
      bots: [],
      enlistedBots: [],
      selectedBot: null
    }

    enlistBot = (bot) => {
      if(!this.state.enlistedBots.includes(bot)){
        this.setState({
          enlistedBots: [...this.state.enlistedBots, bot]
        })
      }
    }

    selectBot = (bot) => {
      this.setState({
        selectedBot: bot
      })
    }

    deselectBot = () => {
      this.setState({
        selectedBot: null
      })
    }

    delistBot = (bot) => {
        this.setState({
          enlistedBots: this.state.enlistedBots.filter(b => bot !== b )
        })
    }



  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(bots => this.setState({bots: bots}))
  }

  render() {
    return (
      <div>
        <YourBotArmy handleClick={this.delistBot} bots={this.state.enlistedBots}/>
        {this.state.selectedBot
          ? <BotSpecs enlistBot={this.enlistBot} deselectBot={this.deselectBot} bot={this.state.selectedBot}/>
          :
        <BotCollection handleClick={this.selectBot} bots={this.state.bots}/>
        }
      </div>
    );
  }

}

export default BotsPage;
