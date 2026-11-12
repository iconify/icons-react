import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz2fis0uk.css';
import '../../css/q/qjmr-gqfc.css';
import '../../css/m/mjmbhbcxa.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz2fis0uk"/><path class="qjmr-gqfc"/><path class="mjmbhbcxa"/>`,
		"fallback": "selfhst:whodb-light",
	});
}

export default Component;
