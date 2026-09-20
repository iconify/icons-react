import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlp8gx.css';
import '../../css/y/ydovum.css';
import '../../css/c/c2d1ay.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/f/fade-to-1.css';
import '../../css/d/d--8d_6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlp8gx ydovum"/><path class="c2d1ay ydovum"/>`,
		"fallback": "line-md:youtube-twotone",
	});
}

export default Component;
