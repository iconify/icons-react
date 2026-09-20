import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrtf_jb_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrtf_jb_f"/>`,
		"fallback": "lucide:wifi-sync",
	});
}

export default Component;
