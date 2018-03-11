import React, { Component } from 'react';
import CSSTransition from "react-transition-group/CSSTransition";

import classes from './SideBar.css';
import Tabs from '../../components/SideBar/Tabs/Tabs';
import Pages from '../../components/SideBar/Pages/Pages';
import Footer from '../../components/SideBar/Footer/Footer';

class SideBar extends Component {
    state = {
        pages: 
        [ {
        	title: "Aktuelles",
        	type: "article",
        	active: true,
        	content: [{
        		image: 'conference.jpg',
        		date: "03.07.2015",
        		headline: "Einladung zur Jahrespressekonferenz",
        		copy: "Lorem ipsum dolor sit amet consectetur, adipiscing elit sagittis fusce primis, enim habitasse vestibulum ridiculus. Netus dictumst nunc libero placerat per justo nec, congue pulvinar diam sodales vitae nibh, aptent erat platea etiam curabitur quam."
        	},
        	{
        		image: 'studienstart.jpg',
				date: "03.07.2015",
        		headline: "Studienstart im Juni",
        		teaser: "Studie zu rheumetoider Arthritis (RA)",
        		copy: "Lorem ipsum dolor sit amet consectetur, adipiscing elit sagittis fusce primis, enim habitasse vestibulum ridiculus. Netus dictumst nunc libero placerat per justo nec, congue pulvinar diam sodales vitae nibh, aptent erat platea etiam curabitur quam."
        	},
        	{
        		image: 'herzenssache.jpg',
				date: "02.07.2015",
        		headline: "Herzenssache - Patienten warten auf ein Spenderherz",
        		teaser: "TV-Tipp: Ein Beitrag in der WDR Mediathek",
        		copy: "Lorem ipsum dolor sit amet consectetur, adipiscing elit sagittis fusce primis, enim habitasse vestibulum ridiculus. Netus dictumst nunc libero placerat per justo nec, congue pulvinar diam sodales vitae nibh, aptent erat platea etiam curabitur quam."
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
				<Tabs pages={this.state.pages} active={this.state.acivePage} clicked={this.tabClicked} />
				<Pages pages={this.state.pages} active={this.state.acivePage} clicked={this.twirlClicked}/>
				<Footer />
			</div>
        );
    }
}

export default SideBar;