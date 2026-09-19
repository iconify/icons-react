import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdw7zbcpw.css';
import '../../css/n/nlpf3um-f.css';
import '../../css/v/vov4arbmu.css';
import '../../css/a/a1iibebpd.css';
import '../../css/t/tfne23ozb.css';
import '../../css/i/izqc8-zuk.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 vdw7zbcpw"/><path class="clr-i-solid clr-i-solid-path-2 nlpf3um-f"/><path class="clr-i-solid clr-i-solid-path-3 vov4arbmu"/><path class="a1iibebpd clr-i-solid clr-i-solid-path-4"/><path class="clr-i-solid clr-i-solid-path-5 tfne23ozb"/><path class="clr-i-solid clr-i-solid-path-6 izqc8-zuk"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:won-solid",
	});
}

export default Component;
