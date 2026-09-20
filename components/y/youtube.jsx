import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kgpquq.css';
import '../../css/b/bxtoun.css';
import '../../css/s/so-from-60.css';
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
		"content": `<path class="kgpquq"/><path class="bxtoun"/>`,
		"fallback": "line-md:youtube",
	});
}

export default Component;
