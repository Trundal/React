import React, { Component } from 'react';
import CSSTransition from "react-transition-group/CSSTransition";

import classes from './SideBar.css';
import Tabs from '../../components/SideBar/Tabs/Tabs';
import Pages from '../../components/SideBar/Pages/Pages';
import Footer from '../../components/SideBar/Footer/Footer';

class SideBar extends Component {
    state = {
        pages: 
        [{
            title: "Poetry",
            active: true,
            type: "article",
            content: [{
                headline: "That wonderful Person of Sparta",
                match: "That wonderful Person of Sparta",
                matched: false,
                poem: [
                    [
                        "There was an Old Lady of Prague,",
                        "Whose language was horribly vague;",
                        "When they said, 'Are these caps?'",
                        "She answered, 'Perhaps!'",
                        "That oracular Lady of Prague."
                    ],
                    [
                        "There was an Old Person of Sparta,",
                        "Who had twenty-one sons and one 'darter';",
                        "He fed them on snails,",
                        "And weighed them in scales,",
                        "That wonderful Person of Sparta."
                    ],
                    [
                        "There was an Old Man at a casement,",
                        "Who held up his hands in amazement;",
                        "When they said, 'Sir, you'll fall!'",
                        "He replied, 'Not at all!'",
                        "That incipient Old Man at a casement."
                    ]
                ]
            }]
        }, 
		{
        	title: "Veranstaltungen",
        	type: "article",
        	content: [{
        		image: 'bones.jpg',
        		date: "03.07.2015",
        		headline: "Einladung zur Jahrespressekonferenz",
        		copy: "Lorem ipsum dolor sit amet consectetur, adipiscing elit sagittis fusce primis, enim habitasse vestibulum ridiculus. Netus dictumst nunc libero placerat per justo nec, congue pulvinar diam sodales vitae nibh, aptent erat platea etiam curabitur quam."
        	},
        	{
        		image: 'scrubs.jpg',
				date: "03.07.2015",
        		headline: "Studienstart im Juni",
        		teaser: "Studie zu rheumetoider Arthritis (RA)",
        		copy: "Lorem ipsum dolor sit amet consectetur, adipiscing elit sagittis fusce primis, enim habitasse vestibulum ridiculus. Netus dictumst nunc libero placerat per justo nec, congue pulvinar diam sodales vitae nibh, aptent erat platea etiam curabitur quam."
        	},
        	{
        		image: 'house.jpg',
				date: "02.07.2015",
        		headline: "Herzenssache - Patienten warten auf ein Spenderherz",
        		teaser: "TV-Tipp: Ein Beitrag in der WDR Mediathek",
        		copy: "Lorem ipsum dolor sit amet consectetur, adipiscing elit sagittis fusce primis, enim habitasse vestibulum ridiculus. Netus dictumst nunc libero placerat per justo nec, congue pulvinar diam sodales vitae nibh, aptent erat platea etiam curabitur quam."
        	}]
        }, 
        {
        	title: "Gallery",
        	type: "gallery",
        	content: [
        		{ image: 'scrubs.jpg' },
        		{ image: 'house.jpg' },
        		{ image: 'who.jpg' },
        		{ image: 'bones.jpg' },
        		{ image: 'tvdocs.jpg' }
        	]
        }]
    };

    textMatched = () => {
        console.log("somethin's happenin here...");
        // let matched = this.state.matchedOnce;
        // matched = true;
        // this.setState({ matched });
    };

	tabClicked = (event) => {
        const pages = this.state.pages;
        for ( const page of pages) page.active = null;
        pages[event.currentTarget.dataset.id].active = true;
		this.setState({ pages });
	};

    twirlClicked = (event) => {
        const pages = this.state.pages;
        pages[event.currentTarget.dataset.page].content[event.currentTarget.dataset.article].copyOpen ? 
        pages[event.currentTarget.dataset.page].content[event.currentTarget.dataset.article].copyOpen = false :
        pages[event.currentTarget.dataset.page].content[event.currentTarget.dataset.article].copyOpen = true ;
        this.setState({ pages });
    };

    render () {
        return (
			<div className={classes.sideBar}>
				<Tabs pages={this.state.pages} clicked={this.tabClicked} />
				<Pages pages={this.state.pages} clicked={this.twirlClicked} matchFunction={this.textMatched} />
				<Footer />
			</div>
        );
    }
}

export default SideBar;