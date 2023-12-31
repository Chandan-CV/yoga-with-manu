<script>
// 	Q) Can beginners join the 3 months challenge ?
// Yes, this workshop is for absolutely everyone. The module is designed for both beginners & advanced . This
// workshop is for all ages and all levels.
// Q) What are the timings ?
// The classes will be held both morning & evening. The exact timings will be as per the requirement of the
// participant. The exact timings will be shared in the whats app group after you register. Late morning batches
// can also be organised.
// Q) Free Yoga session is offered before the Challenge begins? Share more details.
// For the participants to get a taste of Yogic experience 1 free session is provided before the 3 Months Yoga
// challenge begins. This way participants will get to know the teacher & teaching style of the Yoga.
// Q) What is the age criteria to attend the Challenge?
// 18 years and above can join the challenge
// Q) Is the 3 months module available on Offline & online mode?
// Yes, the module is available in both offline & online mode.
// Q) Online & Offline venue:
// Online session will be held on Zoom & Offline session is in Dollars colony, RMV 2nd stage & surrounding area.
// The classes can be conducted at your venue which can accommodate upon 10 to 20 members.
// Q) What if I miss few sessions in between ? Yes, there is absolutely no problem. Offline participants can attend
// online session. Online participants will receive recording so the practice is uninterrupted. • Conditions apply
// Q) I suffer from chronic diseases like diabetes, thyroid, high blood pressure, constipation etc. Can I practise
// yoga?
// Yes, absolutely! This 3 month challenge includes Yoga Therapy for specific health concern. Yogic lifestyle tips &
// diet will help to manage the health issues & also helps reverse, manage & prevent a disease/health issue. The
// participants with any specific health issue/disease must have to fill the health form in a google form. This will
// help to customise the session for your needs. Its recommended to consult your doctor before joining the course
// & to continue the medications.
// Q) Can I practise yoga during pregnancy ? Yoga is very beneficial for pregnant women. However, the asanas
// need to be planned based on the specific trimester. Since we are hosting this workshop online, we are not
// equipped to provide one-on-one guidance for pregnant women. Therefore, it would be best for pregnant
// mothers to avoid this workshop. One on one guidance can be provided.
// Q) I have knee pain and back pain. Can I practise yoga? Yes, we encourage you to join the sessions to get rid of
// your pain. For every posture, modifications will be taught so you can practise as per your capability. You will see
// a huge improvement in your flexibility and pain level with regular practice.
// Q) Can I practice during my periods ?
// Yes, there is absolutely no problem. In every class, modifications will be taught so you can adapt
// each asana to your comfort. If you're experiencing pain, you can simply skip the physical practice and
// participate in the Visualisation/relaxation.
// Q) How will continue my practice after 3 months.
// We will share with you a self practise guide with all asanas that will allow you continue your
// practice. We can also have review session & Next challenge & also ongoing classes.
// Q) What if I like to practice Yoga in my workplace ?
// Yes there is a possibility to bring Yoga to your workplace.
    
    import DropdownFaq from './DropdownFAQ.svelte';
	const faqs = [
  {
    "question": "Can beginners join the 3 months challenge?",
    "answer": "Yes, this workshop is for absolutely everyone. The module is designed for both beginners & advanced. This workshop is for all ages and all levels."
  },
  {
    "question": "What are the timings?",
    "answer": "The classes will be held both morning & evening. The exact timings will be as per the requirement of the participant. The exact timings will be shared in the WhatsApp group after you register. Late morning batches can also be organized."
  },
  {
    "question": "Free Yoga session is offered before the Challenge begins? Share more details.",
    "answer": "For the participants to get a taste of Yogic experience, 1 free session is provided before the 3 Months Yoga challenge begins. This way participants will get to know the teacher & teaching style of the Yoga."
  },
  {
    "question": "What is the age criteria to attend the Challenge?",
    "answer": "18 years and above can join the challenge."
  },
  {
    "question": "Is the 3 months module available on Offline & online mode?",
    "answer": "Yes, the module is available in both offline & online mode."
  },
  {
    "question": "Online & Offline venue:",
    "answer": "Online session will be held on Zoom & Offline session is in Dollars colony, RMV 2nd stage & surrounding area. The classes can be conducted at your venue which can accommodate upon 10 to 20 members."
  },
  {
    "question": "What if I miss few sessions in between?",
    "answer": "Yes, there is absolutely no problem. Offline participants can attend online sessions. Online participants will receive recordings so the practice is uninterrupted. Conditions apply."
  },
  {
    "question": "I suffer from chronic diseases like diabetes, thyroid, high blood pressure, constipation etc. Can I practise yoga?",
    "answer": "Yes, absolutely! This 3-month challenge includes Yoga Therapy for specific health concern. Yogic lifestyle tips & diet will help to manage the health issues & also helps reverse, manage & prevent a disease/health issue. The participants with any specific health issue/disease must have to fill the health form in a Google form. It's recommended to consult your doctor before joining the course & to continue the medications."
  },
  {
    "question": "Can I practise yoga during pregnancy?",
    "answer": "Yoga is very beneficial for pregnant women. However, the asanas need to be planned based on the specific trimester. Since we are hosting this workshop online, we are not equipped to provide one-on-one guidance for pregnant women. Therefore, it would be best for pregnant mothers to avoid this workshop. One on one guidance can be provided."
  },
  {
    "question": "I have knee pain and back pain. Can I practise yoga?",
    "answer": "Yes, we encourage you to join the sessions to get rid of your pain. For every posture, modifications will be taught so you can practise as per your capability. You will see a huge improvement in your flexibility and pain level with regular practice."
  },
  {
    "question": "Can I practice during my periods?",
    "answer": "Yes, there is absolutely no problem. In every class, modifications will be taught so you can adapt each asana to your comfort. If you're experiencing pain, you can simply skip the physical practice and participate in the Visualization/relaxation."
  },
  {
    "question": "How will continue my practice after 3 months?",
    "answer": "We will share with you a self-practice guide with all asanas that will allow you to continue your practice. We can also have review sessions, the Next challenge & ongoing classes."
  },
  {
    "question": "What if I like to practice Yoga in my workplace?",
    "answer": "Yes, there is a possibility to bring Yoga to your workplace."
  }
]

</script>



<div class="w-full flex justify-center items-center flex-col text-white mt-10 mb-20">
	<p class="mt-10 text-3xl font-bold tracking-widest text-dark-purple font-nunito mb-3">FAQs</p>
	{#each faqs as faq}
        <DropdownFaq question={faq.question} answer={faq.answer} />
    {/each}

</div>
