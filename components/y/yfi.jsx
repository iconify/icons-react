import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ul5vootxd.css';
import '../../css/m/m3iep9b0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ul5vootxd"/><path class="m3iep9b0n"/>`,
		"fallback": "token:yfi",
	});
}

export default Component;
