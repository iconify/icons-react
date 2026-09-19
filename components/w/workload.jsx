import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s5_ojsbrt.css';
import '../../css/q/qesa7pb9s.css';
import '../../css/b/biog0ibqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s5_ojsbrt"/><path class="qesa7pb9s"/><path class="biog0ibqw"/>`,
		"fallback": "eos-icons:workload",
	});
}

export default Component;
