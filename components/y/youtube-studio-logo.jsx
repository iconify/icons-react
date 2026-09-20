import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/d/dopnsf63r.css';
import '../../css/g/gf21tgjxp.css';
import '../../css/o/omsp-xbwp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="dopnsf63r"/><path class="gf21tgjxp"/><path class="omsp-xbwp"/></g>`,
		"fallback": "streamline-logos:youtube-studio-logo",
	});
}

export default Component;
