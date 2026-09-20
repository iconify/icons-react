import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npis9_bmd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="npis9_bmd"/>`,
		"fallback": "streamline-logos:zcool-logo-1-solid",
	});
}

export default Component;
