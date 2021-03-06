import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            this.props.stocks.map(stock => {
              return <Stock key={stock.id} stockObj={stock} stockHandler={this.props.stockHandler}/>
            })
          }
      </div>
    );
  }

}

export default PortfolioContainer;
