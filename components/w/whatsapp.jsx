import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gk04yo4uu.css';
import '../../css/w/w7ieg6b4v.css';
import '../../css/r/rc8h5_bqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="gk04yo4uu"/><circle class="w7ieg6b4v"/><path class="rc8h5_bqj"/></g>`,
		"fallback": "meteor-icons:whatsapp",
	});
}

export default Component;
