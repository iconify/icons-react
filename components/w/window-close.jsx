import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gks8du_si.css';
import '../../css/s/sceipoxjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gks8du_si"/><path class="sceipoxjy"/>`,
		"fallback": "pixel:window-close",
	});
}

export default Component;
