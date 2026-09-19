import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s00y7mbtg.css';
import '../../css/b/bwibdw4bb.css';
import '../../css/t/tk43u5bzi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s00y7mbtg"/><path class="bwibdw4bb"/><path class="tk43u5bzi"/>`,
		"fallback": "boxicons:wink-smile",
	});
}

export default Component;
