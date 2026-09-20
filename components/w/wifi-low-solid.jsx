import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3v5spfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vm3v5spfg"/>`,
		"fallback": "mynaui:wifi-low-solid",
	});
}

export default Component;
