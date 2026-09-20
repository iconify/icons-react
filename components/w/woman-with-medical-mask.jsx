import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zm6etnbrp.css';
import '../../css/s/smqoylb7r.css';
import '../../css/g/g4rv9zopj.css';
import '../../css/z/zilxjpxrq.css';
import '../../css/b/bk3m1ub0u.css';
import '../../css/e/evcx-ux7f.css';
import '../../css/t/t0gnwmbio.css';
import '../../css/a/apwi7kbwp.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zm6etnbrp"/><path class="smqoylb7r"/><path class="g4rv9zopj"/><path class="zilxjpxrq"/><path class="bk3m1ub0u"/><path class="evcx-ux7f"/><path class="t0gnwmbio"/><path class="apwi7kbwp"/>`,
		"fallback": "openmoji:woman-with-medical-mask",
	});
}

export default Component;
