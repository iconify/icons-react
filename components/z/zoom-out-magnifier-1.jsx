import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q41sffd_i.css';
import '../../css/p/pmn3hkbsz.css';
import '../../css/y/yd340rbvn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q41sffd_i"/><path class="pmn3hkbsz"/><path class="yd340rbvn"/>`,
		"fallback": "streamline-freehand:zoom-out-magnifier-1",
	});
}

export default Component;
