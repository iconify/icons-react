import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wa31awb9o.css';
import '../../css/j/jdjzcnbab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wa31awb9o"/><path class="jdjzcnbab"/>`,
		"fallback": "bxl:youtube-music",
	});
}

export default Component;
