import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lbsxo3e1k {
  fill: currentColor;
  d: path("M10.154 20.692v-5.307H8.57q-.426 0-.67-.351q-.243-.351-.082-.755l2.385-5.998q.23-.556.712-.88t1.08-.324q.596 0 1.083.324q.486.324.717.88l2.385 5.998q.161.404-.082.755q-.244.35-.67.35h-1.583v5.308q0 .344-.232.576t-.576.232H10.96q-.343 0-.575-.232t-.232-.576m.655-15.385q-.501-.501-.501-1.192q0-.69.5-1.191q.502-.501 1.192-.501t1.191.501t.501 1.192t-.5 1.19q-.502.502-1.192.502t-1.191-.501");
}
</style><path class="lbsxo3e1k"/>`,
		"fallback": "material-symbols-light:woman-rounded",
	});
}

export default Component;
