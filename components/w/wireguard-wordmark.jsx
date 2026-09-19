import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpg-nubov.css';
import '../../css/f/fhcl44oal.css';
import '../../css/q/qijlvrbjb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpg-nubov"/><path class="fhcl44oal"/><path class="qijlvrbjb"/>`,
		"fallback": "devicon:wireguard-wordmark",
	});
}

export default Component;
