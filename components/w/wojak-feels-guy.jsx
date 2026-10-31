import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/klywq2b3r.css';
import '../../css/s/s3fmu_b1e.css';
import '../../css/b/b4o03bb0e.css';
import '../../css/q/qc3e55b3b.css';
import '../../css/o/okid77sen.css';
import '../../css/g/grjmjdh_w.css';
import '../../css/a/a-ykw-igr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="klywq2b3r"/><path class="s3fmu_b1e"/><path class="b4o03bb0e"/><path class="qc3e55b3b"/><path class="okid77sen"/><path class="grjmjdh_w"/><path clip-rule="evenodd" class="a-ykw-igr"/></g>`,
		"fallback": "streamline-memes:wojak-feels-guy",
	});
}

export default Component;
