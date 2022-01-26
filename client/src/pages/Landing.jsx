import React from 'react';
import { Link } from 'react-router-dom';
import main from '../assets/images/undraw-job-hunt.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';

const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<Logo />
			</nav>
			<div className='container page'>
				<div className='info'>
					<h1>
						job <span>tracking</span> app
					</h1>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
						dolor sit amet, consectetur adipiscing elit.
					</p>
					<Link to='/register' className='btn btn-hero'>
						Login / Register
					</Link>
				</div>
				<img src={main} alt='job hunt' className='img main-img' />
			</div>
		</Wrapper>
	);
};

// const Wrapper = styled.main`
// 	nav {
// 		width: var(--fluid-width);
// 		max-width: var(max-width);
// 		margin: 0 auto;
// 		height: var(--nav-height);
// 		display: flex;
// 		align-items: center;
// 	}
// 	.page {
// 		min-height: calc(100vh - var(--nav-height));
// 		display: grid;
// 		align-items: center;
// 		margin-top: -3rem;
// 	}
// 	h1 {
// 		font-weight: 700;
// 		span {
// 			color: var(--primary-500);
// 		}
// 	}
// 	p {
// 		color: var(--grey-500);
// 	}
// 	.main-img {
// 		display: none;
// 	}
// 	@media (min-width: 992px) {
// 		.page {
// 			grid-template-columns: 1fr 1fr;
// 			column-gap: 3rem;
// 		}
// 		.main-img {
// 			display: block;
// 		}
// 	}
// `;

export default Landing;
