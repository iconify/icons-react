import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dj_edtbco.css';
import '../../css/n/n3kf-o-ku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dj_edtbco"/><path class="n3kf-o-ku"/>`,
		"fallback": "mingcute:youtube-line",
	});
}

export default Component;
