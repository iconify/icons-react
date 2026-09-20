import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/f/fkhlm7bws.css';
import '../../css/n/n3euusb5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="fkhlm7bws"/><path class="n3euusb5g"/></g>`,
		"fallback": "streamline-logos:youtube-clip-logo",
	});
}

export default Component;
