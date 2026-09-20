import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oea5vwbvf.css';
import '../../css/f/fki8e6b1y.css';
import '../../css/z/znuomydyr.css';
import '../../css/c/cvucl6bkf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oea5vwbvf"/><circle class="fki8e6b1y"/><circle class="znuomydyr"/><circle class="cvucl6bkf"/>`,
		"fallback": "selfhst:yuvomi-dark",
	});
}

export default Component;
