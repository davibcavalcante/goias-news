const MailContact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="flex flex-col gap-4" >
      <span className='text-white text-xl font-semibold'>Contato</span>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input type="text" name="subject" placeholder="Assunto" className="bg-white p-2 rounded-sm block" />
        <input type="text" name="from" placeholder="Seu email" className="bg-white p-2 rounded-sm" />
        <textarea name="content" placeholder="Digite seu email aqui" className="bg-white p-2 rounded-sm h-20">

        </textarea>
        <button type="submit" className="bg-white text-main px-4 py-2 border-0 rounded-sm block w-fit self-end">
          Enviar
        </button>
      </form>
    </section>
  );
};

export default MailContact;