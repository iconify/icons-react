import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_t84-b5u.css';
import '../../css/b/bx7-e6irj.css';
import '../../css/r/rd_-p8eew.css';
import '../../css/l/lmf0ecbhq.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid--badged clr-i-solid-path-1--badged x_t84-b5u"/><path class="bx7-e6irj clr-i-solid--badged clr-i-solid-path-2--badged"/><path class="clr-i-solid--badged clr-i-solid-path-3--badged rd_-p8eew"/><circle class="clr-i-badge clr-i-solid--badged clr-i-solid-path-4--badged lmf0ecbhq"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:world-solid-badged",
	});
}

export default Component;
