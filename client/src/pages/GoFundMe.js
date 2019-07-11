import React, { Component } from "react";
import axios from "axios";

export default class GoFundMe extends Component {
    state = {
        campaigns : []
    };

    componentDidMount() {
        axios.get("/api/go-fund-me")
            .then(response => this.setState({campaigns: response.data}));
    }

    render() {
        return (
            <div>
                {this.state.campaigns.map(function (campaign) {
                    return (
                        <p key={campaign.id}>{campaign.title}</p>
                    );
                })}
            </div>
        );
    }
}