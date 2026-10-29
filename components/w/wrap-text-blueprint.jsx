import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vg7o3iwek.css';
import '../../css/g/gbz5sj1lw.css';
import '../../css/o/orbxgqi3s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="vg7o3iwek wm-k"/><path class="gbz5sj1lw wm-k"/><path class="orbxgqi3s wm-a"/></g>`,
		"fallback": "withicons:wrap-text-blueprint",
	});
}

export default Component;
