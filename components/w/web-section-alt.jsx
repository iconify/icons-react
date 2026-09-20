import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ahfmtbc0f.css';
import '../../css/l/lf_du3q8d.css';
import '../../css/p/pgcktybjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ahfmtbc0f"/><path class="lf_du3q8d"/><path class="pgcktybjd"/>`,
		"fallback": "uim:web-section-alt",
	});
}

export default Component;
