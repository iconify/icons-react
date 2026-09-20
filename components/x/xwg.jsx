import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c0qw642vk.css';
import '../../css/h/h8mzq7b0f.css';
import '../../css/p/p2wzsfbnu.css';
import '../../css/p/piqtzrvwu.css';
import '../../css/b/be7j3d5wr.css';
import '../../css/o/ob2vgybmm.css';
import '../../css/l/ldi32yb5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c0qw642vk"/><path class="h8mzq7b0f"/><path class="p2wzsfbnu"/><path class="piqtzrvwu"/><path class="be7j3d5wr"/><path class="ob2vgybmm"/><path class="ldi32yb5h"/>`,
		"fallback": "token:xwg",
	});
}

export default Component;
