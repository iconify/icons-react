import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/icxseb_9p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="icxseb_9p"/>`,
		"fallback": "streamline-flex:workspace-desk-remix",
	});
}

export default Component;
