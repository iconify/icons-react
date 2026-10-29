import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6k26uktb.css';
import '../../css/x/xay746b5q.css';
import '../../css/w/w-h96getf.css';
import '../../css/i/im5kqc72c.css';
import '../../css/b/bmggswb5u.css';
import '../../css/v/v6hcw5tmy.css';
import '../../css/j/js4rxvhhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6k26uktb wm-shadow"/><path class="wm-k xay746b5q"/><path class="w-h96getf wm-k"/><path class="im5kqc72c wm-k"/><path class="bmggswb5u wm-k"/><path class="v6hcw5tmy wm-k"/><path class="js4rxvhhq wm-shine"/>`,
		"fallback": "withicons-pastel:zap",
	});
}

export default Component;
