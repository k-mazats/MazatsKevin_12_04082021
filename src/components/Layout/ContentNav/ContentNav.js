import './ContentNav.css';
import { ReactComponent as YogaIcon } from '../../../assets/svg/content-nav-yoga-icon.svg';
import { ReactComponent as SwimmingIcon } from '../../../assets/svg/content-nav-swimming-icon.svg';
import { ReactComponent as BikeIcon } from '../../../assets/svg/content-nav-bike-icon.svg';
import { ReactComponent as LiftIcon } from '../../../assets/svg/content-nav-lift-icon.svg';
const ContentNav = () => {
	return (
		<div className="side-bar">
			<nav className="content-nav">
				<ul className="content-nav__list">
					<li>
						<button className="content-nav__button">
							<YogaIcon></YogaIcon>
						</button>
					</li>
					<li>
						<button className="content-nav__button">
							<SwimmingIcon></SwimmingIcon>
						</button>
					</li>
					<li>
						<button className="content-nav__button">
							<BikeIcon></BikeIcon>
						</button>
					</li>
					<li>
						<button className="content-nav__button">
							<LiftIcon></LiftIcon>
						</button>
					</li>
				</ul>
			</nav>
			<div className="copyright">Copyright, SportSee 2020</div>
		</div>
	);
};

export default ContentNav;
