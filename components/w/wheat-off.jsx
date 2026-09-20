import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qw_1nvbkg.css';
import '../../css/y/yoka-v70c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qw_1nvbkg"/><path class="yoka-v70c"/></g>`,
		"fallback": "lucide:wheat-off",
	});
}

export default Component;
