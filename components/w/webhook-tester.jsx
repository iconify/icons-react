import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl35fttde.css';
import '../../css/f/frr8tzpij.css';
import '../../css/m/mept65bwj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="yl35fttde"/><path class="frr8tzpij"/><path class="mept65bwj"/>`,
		"fallback": "selfhst:webhook-tester",
	});
}

export default Component;
