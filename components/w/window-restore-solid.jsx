import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_f5fmb5w.css';
import '../../css/d/dgp7bubto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_f5fmb5w"/><path class="dgp7bubto"/>`,
		"fallback": "pixel:window-restore-solid",
	});
}

export default Component;
